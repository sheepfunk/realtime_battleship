class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :authenticate_user!

  realtime_controller({:queue => :redis}) # instruct all requests to enable realtime support via redis

  def realtime_user_id
    return current_user.id if current_user
  end

  def realtime_server_url
    # point this to your node.js-socket.io-redis/zmq realtime server (you can set this later)
    return 'http://localhost:5001'
  end
end
