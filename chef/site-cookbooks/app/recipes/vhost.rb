vhost_name = node["app"]["name"]

template "#{node['nginx']['dir']}/sites-available/#{vhost_name}" do
  source "vhost.erb"
  owner "root"
  group node["nginx"]["root_group"]
  mode "0644"
  notifies :reload, "service[nginx]"
  variables({
    "app" => node["app"]
  })
end

nginx_site vhost_name do
  enable true
end
