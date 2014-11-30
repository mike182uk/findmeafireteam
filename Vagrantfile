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

  # vm config
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "private_network", ip: "33.33.33.32"
  config.vm.synced_folder "app/", "/mnt/App"

  # chef solo provisioner
  config.vm.provision "chef_solo" do |chef|
    chef.roles_path = "chef/roles"

    chef.add_role "fullstack"
    chef.add_role "app"

    chef.json = {}
  end
end
