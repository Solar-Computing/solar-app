class SimulationsController < ApplicationController
  def get_simulation
    date_time = params[:time]
    obj = Simulation.where(endDateTime: date_time).first

    render :json => { simulation: obj }
  end
end
