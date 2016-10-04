Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # devise_for :users

  get "api" => 'apis#say_hello'
  get "api/simulation" => "simulations#get_simulation"
  get "api/simulation/daily" => "simulations#get_daily_load"
end
