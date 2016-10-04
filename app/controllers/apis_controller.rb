class ApisController < ApplicationController
  def say_hello
    render json: { hello: "hello" }
  end
end
