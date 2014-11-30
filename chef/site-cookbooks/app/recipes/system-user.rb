group node["app"]["system"]["user"]["group"] do
  action :create
end

user node["app"]["system"]["user"]["name"] do
  gid node["app"]["system"]["user"]["group"]
  home node["app"]["location"]
  system true
  action :create
end
