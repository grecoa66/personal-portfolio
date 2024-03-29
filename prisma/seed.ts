import { PrismaClient, picks } from "@prisma/client";
const prisma = new PrismaClient();
async function seedSlates() {
  // const slates = await prisma.slates.createMany({
  //   data: [
  //     {
  //       league: "nfl",
  //       title: "NFL Week 9",
  //       start_date: "2023-11-05T11:00:00.000Z",
  //       end_date: "2023-11-05T23:00:00.000Z",
  //       is_active: false,
  //       is_locked: true,
  //       is_complete: true,
  //       created_by: 1,
  //     },
  //     {
  //       league: "nfl",
  //       title: "NFL Week 10",
  //       start_date: "2023-11-12T11:00:00.000Z",
  //       end_date: "2023-11-12T23:00:00.000Z",
  //       is_active: false,
  //       is_locked: true,
  //       is_complete: true,
  //       created_by: 1,
  //     },
  //     {
  //       league: "nfl",
  //       title: "NFL Week 11",
  //       start_date: "2023-11-19T11:00:00.000Z",
  //       end_date: "2023-11-19T23:00:00.000Z",
  //       is_active: true,
  //       is_locked: false,
  //       is_complete: false,
  //       created_by: 1,
  //     },
  //   ],
  // });

  // const props = await prisma.props.createMany({
  //   data: [
  //     {
  //       league: "nfl",
  //       player_name: "Josh Allen",
  //       players_team: "Buffalo Bills",
  //       home_team: "Buffalo Bills",
  //       away_team: "New York Jets",
  //       game_start_time: "2023-11-05T11:00:00.000Z",
  //       start_date: "2023-11-05T00:00:00.000Z",
  //       end_date: "2023-11-05T23:00:00.000Z",
  //       prop_type: "Passing Yards",
  //       under_value: 237.5,
  //       prop_value: 237.5,
  //       over_price: -114,
  //       prop_result: "over",
  //       created_by: 1,
  //       created_at: "2023-11-04T11:00:00.000Z",
  //       modified_at: "2023-11-04T11:00:00.000Z",
  //       slate_id: 1,
  //       is_active: false,
  //     },
  //     {
  //       league: "nfl",
  //       player_name: "Zach Wilson",
  //       players_team: "New York Jets",
  //       home_team: "Buffalo Bills",
  //       away_team: "New York Jets",
  //       game_start_time: "2023-11-05T11:00:00.000Z",
  //       start_date: "2023-11-05T11:00:00.000Z",
  //       end_date: "2023-11-05T14:00:00.000Z",
  //       prop_type: "Passing Yards",
  //       under_value: 206.5,
  //       prop_value: 206.5,
  //       over_price: -114,
  //       prop_result: "under",
  //       created_by: 1,
  //       created_at: "2023-11-04T11:00:00.000Z",
  //       modified_at: "2023-11-04T11:00:00.000Z",
  //       slate_id: 1,
  //       is_active: false,
  //     },
  //     {
  //       league: "nfl",
  //       home_team: "Buffalo Bills",
  //       away_team: "New York Jets",
  //       game_start_time: "2023-11-12T14:00:00.000Z",
  //       start_date: "2023-11-12T00:00:00.000Z",
  //       end_date: "2023-11-12T23:00:00.000Z",
  //       prop_type: "Total Points",
  //       under_value: 37.5,
  //       prop_value: 37.5,
  //       over_price: -114,
  //       prop_result: "over",
  //       created_by: 1,
  //       created_at: "2023-11-11T00:00:00.000Z",
  //       modified_at: "2023-11-11T00:00:00.000Z",
  //       slate_id: 2,
  //       is_active: false,
  //     },
  //     {
  //       league: "nfl",
  //       player_name: "Justin Hurbert",
  //       players_team: "Los Angeles Chargers",
  //       home_team: "Green Bay Packers",
  //       away_team: "Los Angeles Chargers",
  //       game_start_time: "2023-11-19T11:00:00.000Z",
  //       start_date: "2023-11-19T00:00:00.000Z",
  //       end_date: "2023-11-19T23:00:00.000Z",
  //       prop_type: "Passing TDs",
  //       prop_result: "active",
  //       under_value: 1.5,
  //       prop_value: 1.5,
  //       over_price: -130,
  //       created_by: 1,
  //       created_at: "2023-11-18T11:00:00.000Z",
  //       modified_at: "2023-11-18T11:00:00.000Z",
  //       slate_id: 3,
  //       is_active: true,
  //     },
  //     {
  //       league: "nfl",
  //       player_name: "Tommy Devito",
  //       players_team: "New York Giants",
  //       home_team: "Washington Commanders",
  //       away_team: "New York Giants",
  //       game_start_time: "2023-11-19T11:00:00.000Z",
  //       start_date: "2023-11-19T00:00:00.000Z",
  //       end_date: "2023-11-19T23:00:00.000Z",
  //       prop_type: "Passing TDs",
  //       prop_result: "active",
  //       under_value: 17.5,
  //       prop_value: 17.5,
  //       over_price: -130,
  //       created_by: 1,
  //       created_at: "2023-11-18T11:00:00.000Z",
  //       modified_at: "2023-11-18T11:00:00.000Z",
  //       slate_id: 3,
  //       is_active: true,
  //     },
  //   ],
  // });

  const picks = await prisma.picks.createMany({
    data: [
      {
        selection: "over",
        pick_result: "win",
        is_locked: true,
        created_by: 1,
        prop_id: 1,
        slate_id: 1,
        created_at: "2023-11-18T11:00:00.000Z",
        modified_at: "2023-11-18T11:00:00.000Z",
      },
      {
        selection: "over",
        pick_result: "lose",
        is_locked: true,
        created_by: 1,
        prop_id: 2,
        slate_id: 1,
        created_at: "2023-11-18T11:00:02.000Z",
        modified_at: "2023-11-18T11:00:02.000Z",
      },
      {
        selection: "over",
        pick_result: "win",
        is_locked: true,
        created_by: 1,
        prop_id: 3,
        slate_id: 2,
        created_at: "2023-11-18T11:00:04.000Z",
        modified_at: "2023-11-18T11:00:04.000Z",
      },
    ],
  });

  // console.log("Data: ", { slates, props, picks });
  // console.log("Data: ", { slates });
  // console.log("Data: ", { props });
  // console.log("Data: ", { picks });
}
seedSlates()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
