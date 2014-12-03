require "net/scp"
require "net/ssh"

$build_dir = "/tmp/findmeafireteam-app-build"
$build_tar = "findmeafireteam.tgz"
$build_tar_path = "/tmp/#{$build_tar}"
$remote_build_tar_path = "/tmp/#{$build_tar}"
$remote_app_path = "/var/www/findmeafireteam"

desc "Start up meteor ready for development"
task :app_dev do
  system "cd app && meteor --settings settings/development.json"
end

desc "Build the app"
task :build do
  build
  puts "App build available at #{$build_tar_path}"
end

desc "Bootstrap a remote server for provisioning"
task :bootstrap, [:host, :username, :password] do |task, args|
  system "cd chef && /usr/bin/knife solo prepare --ssh-password=#{args[:password]} --node-name=findmeafireteam.com #{args[:username]}@#{args[:host]}"
end

desc "Provision a remote server"
task :provision, [:host, :username, :password] do |task, args|
  system "cd chef && /usr/bin/knife solo cook --config=knife.rb --ssh-password=#{args[:password]} #{args[:username]}@#{args[:host]} nodes/findmeafireteam.com.json"
end

desc "Build and deploy the app to a remote server"
task :deploy, [:host, :username, :password] do |task, args|
  puts "building app..."
  build

  Net::SCP.start(args[:host], args[:username], :password => args[:password]) do |scp|
    puts "uploading build to remote server [#{args[:username]}@#{args[:host]}]"
    scp.upload! $build_tar_path, "/tmp/#{$build_tar}"
  end

  Net::SSH.start(args[:host], args[:username], :password => args[:password]) do |ssh|
    remote_status args, "Stopping the service..."
    ssh.exec! "sudo stop findmeafireteam"

    remote_status args, "Removing the existing app..."
    ssh.exec! "sudo rm -rf #{$remote_app_path}"

    remote_status args, "Re-building the app directory..."
    ssh.exec! "sudo mkdir -p #{$remote_app_path}"

    remote_status args, "Extracting build into the correct location..."
    ssh.exec! "sudo tar -xf #{$remote_build_tar_path} -C #{$remote_app_path}"

    remote_status args, "Installing required node modules..."
    ssh.exec! "cd #{$remote_app_path}/bundle/programs/server && sudo npm install"

    remote_status args, "Applying permissions..."
    ssh.exec! "sudo chown -R findmeafireteam:findmeafireteam #{$remote_app_path}"

    remote_status args, "Cleaning up..."
    ssh.exec! "sudo rm #{$remote_build_tar_path}"

    remote_status args, "Starting the service..."
    ssh.exec! "sudo start findmeafireteam"
  end

  puts "cleaning up..."
  cleanup_local

  puts "done!"
end

def build
  # build app via meteor
  system "cd app && meteor build --directory #{$build_dir}"

  # add settings to the build
  system "cp app/settings/production.json #{$build_dir}/bundle/settings.json"

  # create build tarball to be uploaded
  system "cd #{$build_dir} && tar -zcf ../#{$build_tar} ."
end

def cleanup_local
  system "rm -rf #{$build_tar_path}"
  system "rm -rf #{$build_dir}"
end

def remote_status(args, message)
  puts "[#{args[:username]}@#{args[:host]}] #{message}"
end
