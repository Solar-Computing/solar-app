class CreateNewSimulationsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :simulations do |t|
      t.datetime  :endDateTime
      t.float :globalSolar
      t.float :PVSolarAltitude
      t.float :PVSolarAzimuth
      t.float :PVAngleOfIncidence
      t.float :PVIncidentSolar
      t.float :PVPowerOutput
      t.float :ACPrimaryLoad
      t.float :ACPrimaryLoadServed
      t.float :gridPowerPrice
      t.float :gridSellbackRate
      t.float :gridPurchases
      t.float :gridSales
      t.float :totalElectricalLoadServed
      t.float :renewablePenetration
      t.float :excessElectricalProduction
      t.float :unmetElectricalLoad
      t.float :totalRenewablePowerOutput
      t.float :inverterPowerInput
      t.float :inverterPowerOutput
      t.float :rectifierPowerInput
      t.float :rectifierPowerOutput
      t.float :trojanL16PMaximumChargePower
      t.float :trojanL16PMaximumDischargePower
      t.float :trojanL16PChargePower
      t.float :trojanL16PDischargePower
      t.float :trojanL16PInputPower
      t.float :trojanL16PEnergyContent
      t.float :trojanL16PStateOfCharge
      t.float :trojanL16PEnergyCost
      t.float :ACRequiredOperatingCapacity
      t.float :DCRequiredOperatingCapacity
      t.float :ACOperatingCapacity
      t.float :DCOperatingCapacity
    end
  end
end
