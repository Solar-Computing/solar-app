class SimulationsController < ApplicationController
  def get_simulation
    date_time = params[:time]
    obj = Simulation.where(endDateTime: date_time).first

    render :json => { simulation: obj }
  end

  def get_daily_load
    date = params[:date]
    totalLoad = Simulation.where("date(\"endDateTime\") = '#{date}'").sum(:totalElectricalLoadServed)

    render :json => { daily_load: totalLoad}
  end
end
