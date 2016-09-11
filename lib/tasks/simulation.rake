namespace :simulation do
  desc "Importing simulation data from 'homerresults.csv' to database"
  task populateDb: :environment do
    require 'csv'
    require 'date'

    CSV.foreach('homerresults.csv', headers:true) do |row|
      s = Simulation.new
      s.endDate = DateTime.strptime(row['End Time'], '%m/%d/%y %H:%M')
      s.globalSolar = row['Global Solar'].to_f
      s.PVSolarAltitude = row['PV Solar Altitude'].to_f
      s.PVSolarAzimuth = row['PV Solar Azimuth'].to_f
      s.PVAngleOfIncidence = row['PV Angle Of Incidence'].to_f
      s.PVIncidentSolar = row['PV Incident Solar'].to_f
      s.PVPowerOutput = row['PV Power Output'].to_f
      s.ACPrimaryLoad = row['AC Primary Load'].to_f
      s.ACPrimaryLoadServed = row['AC Primary Load Served'].to_f
      s.gridPowerPrice = row['Grid Power Price'].to_f
      s.gridSellbackRate = row['Grid Sellback Rate'].to_f
      s.gridPurchases = row['Grid Purchases'].to_f
      s.gridSales = row['Grid Sales'].to_f
      s.totalElectricalLoadServed = row['Total Electrical Load Served'].to_f
      s.renewablePenetration = row['Renewable Penetration'].to_f
      s.excessElectricalProduction = row['Excess Electrical Production'].to_f
      s.unmetElectricalLoad = row['Unmet Electrical Load'].to_f
      s.totalRenewablePowerOutput = row['Total Renewable Power Output'].to_f
      s.inverterPowerInput = row['Inverter Power Input'].to_f
      s.inverterPowerOutput = row['Inverter Power Output'].to_f
      s.rectifierPowerInput = row['Rectifier Power Input'].to_f
      s.rectifierPowerOutput = row['Rectifier Power Output'].to_f
      s.trojanL16PMaximumChargePower = row['Trojan L16P Maximum Charge Power'].to_f
      s.trojanL16PMaximumDischargePower = row['Trojan L16P Maximum Discharge Power'].to_f
      s.trojanL16PChargePower = row['Trojan L16P Charge Power'].to_f
      s.trojanL16PDischargePower = row['Trojan L16P Discharge Power'].to_f
      s.trojanL16PInputPower = row['Trojan L16P Input Power'].to_f
      s.trojanL16PEnergyContent = row['Trojan L16P Energy Content'].to_f
      s.trojanL16PStateOfCharge = row['Trojan L16P State of Charge'].to_f
      s.trojanL16PEnergyCost = row['Trojan L16P Energy Cost'].to_f
      s.ACRequiredOperatingCapacity = row['AC Required Operating Capacity'].to_f
      s.DCRequiredOperatingCapacity = row['DC Required Operating Capacity'].to_f
      s.ACOperatingCapacity = row['AC Operating Capacity'].to_f
      s.DCOperatingCapacity = row['DC Operating Capacity'].to_f
      s.save!
    end
  end

end
