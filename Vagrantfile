# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # vagrant-cachier config
  config.cache.scope = :box

  # vm config
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "private_network", ip: "33.33.33.31"

  # vagrant-berkshelf config
  config.berkshelf.berksfile_path = "./Berksfile"
  config.berkshelf.enabled = true

  # chef solo provisioner
  config.vm.provision "chef_solo" do |chef|
    chef.add_recipe "nodejs"
    chef.add_recipe "mongodb::10gen_repo"
    chef.add_recipe "mongodb"

    chef.json = {}
  end

  # shell provisioner
  config.vm.provision "shell", inline: <<SCRIPT
echo 'Installing Meteor...'
if [ -x /usr/local/bin/meteor ]; then
    echo 'Meteor already installed!'
else
  curl --silent https://install.meteor.com/ >> ~/install-meteor.sh
  chmod +x ~/install-meteor.sh
  ~/install-meteor.sh >/dev/null 2>&1
  echo 'Meteor installed!'
fi
SCRIPT

end
