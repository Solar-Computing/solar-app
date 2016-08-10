import {Banner} from '../models/banner';

export class HomeData {
  sprawl: Banner = new Banner();
  low_water: Banner = new Banner();
  high_cost: Banner = new Banner();
  water_war: Banner = new Banner();

  constructor() {
    this.sprawl.title = 'Sprawling Metropolis';
    this.sprawl.description = 'Home to 6,000,000 people. 2,000,000 more expected.';
    this.sprawl.text = `
Atlanta, Georgia has always been a an enduring city that has survived through hardships that what would have severely hindered others. By luck or destiny, Atlanta is still here today and continues to thrive. Atlanta is known as a city in the forest with a tree canopy more dense than most US cities. Rem Koolhaus says, “Atlanta is a landscape and not a city.”

This statement alludes to Atlanta’s nearly unregulated sprawl into the current 10 county metropolitan region that lacks high-density, urban form that a typical city of its size would.

Metro Atlanta is home to over 6 million people and had a growth rate of 1.27% in 2015 according to Forbes Inc. By 2040, the Atlanta Regional Commission (ARC) expects the Atlanta metro area to reach 8 million. `;

    this.low_water.title = 'Inadequate Water';
    this.low_water.description = 'Finding enough water to meet the demands of a growing city.';
    this.low_water.text = `
Atlanta is one of three major US cities not built upon a large source of water. Dallas, Texas and Denver, Colorado being the other two. Finding enough water to meet the demands of a growing city has always been a struggle for Atlanta.

The Chattahooche River provides Atlanta with its drinking water and was also perpetually used as a sewage dump causing a major health epidemic at the turn of the 20th century. A series of water treatment plants were built to maintain the river as a viable resource for drinking water, power generation, agriculture, aquaculture and recreation.

The region is blessed with abundant rainfall in excess of 50 inches; which is more than Seattle, WA on average. However, Atlanta is also prone to cyclical droughts and dry seasons that do not produce a steady rainfall year round.

Reservoirs were constructed using dams that allowed Lake Lanier in the ACF river basin and Lake Allatoona in the ACT river basin to become municipal water resources. However, this practice reduces the volume and quality of the water as it flows to the Gulf of Mexico, creating challenges for Alabama and Florida.`;

    this.high_cost.title = 'Rising Water Cost';
    this.high_cost.description = "One of the highest water utility prices in the US.";
    this.high_cost.text = `
According to the Atlanta Department of the Watershed, the City of Atlanta has roughly 3 days worth of raw water in reserve for about 475,000 residents within the city limits, Hartsfield-Jackson International Airport and all of its visitors.

To acquire drinking water when all reserves have run dry or have been deemed unusable is estimated to cost nearly $100 million a day. A new 2.4 billion gallon water reservoir is currently under construction in the former Bellwood quarry between the Chattahoochee River and the Hemphill Water Treatment Facility that can potentially boost reserves from 3 to 30 days. The new Westside Reservoir will also be a park and is connected to the future Atlanta Beltline westside trail and has been set to be open in 2018.

The 1990s also marked the re-awakening of the water quality struggle in Atlanta. Failing to meet water quality standards set by the EPA in the metro area, Atlanta suffered annual fines in the millions of dollars to the federal government to keep its water clean and for using a combined sewer overflow (CSO) system. In 2002, former Mayor Shirley Franklin intiated Clean Water Atlanta, a billion dollar, 5-point plan to rehabilitate Atlanta’s water infrastructure.

Most of Atlanta’s water infrastructure dates back from the late 19th century according to the Department of the Watershed. The aging system will need to be totally upgraded and replaced over the next 10-20 years to handle the increased demand of a growing region and continue to meet water quality standards.

Clean Water Atlanta added one cent to the sales tax in Fulton County and increased Atlanta’s monthly water utility rates to some of the highest in the country according to Circle of Blue.`;

    this.water_war.title = 'Tri-State Water War';
    this.water_war.description = 'Water struggle between Georgia, Florida and Alabama.';
    this.water_war.text = `
The Tri-state water wars officially began when the Alabama & Florida filed a suits with the Army Corps of Engineers in 1990 for equal water apportionment from the ACF (Alabama, Coosa, Tallapoosa) & ACT (Apalachicola, Chattahoochee, Flint) river basins.

In the late 1980s, two of region’s biggest users of the river, a nuclear power plant & a paper mill, both suffered from poor flow on the river in Alabama. The sediment quality and water flow needed for Apalachicola Bay oysters to thrive was also beginning to fail to keep this $80 million dollar industry afloat during the same time. The thirsty Atlanta metro area with its combined sewer and storm water system significantly reduced its flow and was contaminated with toxins & bacteria.

This struggle continued through the 1990s with futile negotiations and state leaders threatening military action for access to water resources. A regional drought worsened relations and threatened water rationing.

The 2000s were filled with federal court trials and rulings to shut-down Atlanta’s draw from Lake Lanier without a viable plan to reprimand the region for uncontrolled growth over the past 30 years. This forced the Atlanta metro area to seek water conservation strategies as opposed to fighting for more water. This ideology has bought more time in this ongoing conflict.

In 2015, the Army Corps of Engineers released a Master Water Control Manual and Environmental Impact Statement for the ACF River basin to outline how it plans to supply water to metro Atlanta from Lake Lanier with a final version due in 2017.`;
  }
}
