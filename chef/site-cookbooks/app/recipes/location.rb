directory node["app"]["location"] do
  owner node["app"]["system"]["user"]["name"]
  group node["app"]["system"]["user"]["group"]
  mode "0755"
  recursive true
  action :create
end
