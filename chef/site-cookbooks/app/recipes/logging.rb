directory node["app"]["system"]["logs_location"] do
  owner "findmeafireteam"
  group "findmeafireteam"
  mode "0755"
  action :create
end
