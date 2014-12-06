# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # vagrant-cachier config
  config.cache.scope = :box

  # vagrant-berkshelf config
  config.berkshelf.berksfile_path = "chef/Berksfile"
  config.berkshelf.enabled =

  # vagrant-hostsupdater config
  config.vm.hostname = "findmeafireteam.dev"

  # vagrant-omnibus config
  config.omnibus.chef_version = :latest

  # vm config
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "private_network", ip: "33.33.33.32"

  # chef solo provisioner
  config.vm.provision "chef_solo" do |chef|
    chef.roles_path = "chef/roles"

    require "json"
    chef.json = JSON.load File.new("chef/nodes/findmeafireteam.dev.json")
    chef.json["run_list"].each do |recipe|
      if recipe =~ /(.*)\[(.*)\]/
        chef.send "add_" + $1, $2
      else
        chef.add_recipe recipe
      end
    end
  end

end
