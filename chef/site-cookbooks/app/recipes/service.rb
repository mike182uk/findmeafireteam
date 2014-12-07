service_name = node["app"]["name"]

template "/etc/init/#{service_name}.conf" do
  source "upstart-conf.erb"
  owner "root"
  group "root"
  mode "0644"
  notifies :reload, "service[#{service_name}]"
  variables({
    "app" => node["app"]
  })
end

service service_name do
  provider Chef::Provider::Service::Upstart
  action [:enable, :start]
end
