require "net/scp"
require "net/ssh"

$build_dir = "/tmp/findmeafireteam-build"
$build_tar = "findmeafireteam.tgz"
$build_tar_path = "/tmp/#{$build_tar}"
$remote_build_tar_path = "/tmp/#{$build_tar}"
$remote_app_path = "/var/www/findmeafireteam"

task :deploy_local do
  # build app
  build

  # upload build
  Net::SCP.start("33.33.33.32", "vagrant", :password => "vagrant") do |scp|
    scp.upload! $build_tar_path, "/tmp/#{$build_tar}"
  end

  Net::SSH.start("33.33.33.32", "vagrant", :password => "vagrant") do |ssh|
    # stop the service
    ssh.exec! "sudo stop findmeafireteam"

    # remove existing app
    ssh.exec! "sudo rm -rf #{$remote_app_path}"

    # recreate app directory
    ssh.exec! "sudo mkdir -p #{$remote_app_path}"

    # untar build into correct location
    ssh.exec! "sudo tar -xf #{$remote_build_tar_path} -C #{$remote_app_path}"

    # install node modules
    ssh.exec! "cd #{$remote_app_path}/bundle/programs/server && sudo npm install"

    # set the correct permissions
    ssh.exec! "sudo chown -R findmeafireteam:findmeafireteam #{$remote_app_path}"

    # remove uploaded build tar
    ssh.exec! "sudo rm #{$remote_build_tar_path}"

    # start the service
    ssh.exec! "sudo start findmeafireteam"
  end

  cleanup_local
end

def build
  # remove any left overs from the last build
  cleanup_local

  # build app via meteor
  sh "cd app && meteor build --directory #{$build_dir}"

  # create build tarball to be uploaded
  sh "cd #{$build_dir} && tar -zcf ../#{$build_tar} ."
end

def cleanup_local
  sh "rm -rf #{$build_tar_path}"
  sh "rm -rf #{$build_dir}"
end
