import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1715885810653 implements MigrationInterface {
  name = 'Initial1715885810653';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "matches" ("id" SERIAL NOT NULL, "date" character varying NOT NULL, "time" character varying NOT NULL, "win" boolean NOT NULL, "result" character varying NOT NULL, CONSTRAINT "PK_8a22c7b2e0828988d51256117f4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "players" ("id" SERIAL NOT NULL, "nickname" character varying NOT NULL, "fullname" character varying NOT NULL, "pos" integer NOT NULL, "main" character varying NOT NULL, CONSTRAINT "PK_de22b8fdeee0c33ab55ae71da3b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "trainers" ("id" SERIAL NOT NULL, "nickname" character varying NOT NULL, "fullname" character varying NOT NULL, "team" integer NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_198da56395c269936d351ab774b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "players_matches" ("match_id" integer NOT NULL, "player_id" integer NOT NULL, CONSTRAINT "PK_b824cc821a296f87adc007ae094" PRIMARY KEY ("match_id", "player_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4e497e4d9bec9f5fd10270b1ea" ON "players_matches" ("match_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_7018d38352a85427436ebd492d" ON "players_matches" ("player_id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "players_trainers" ("player_id" integer NOT NULL, "trainer_id" integer NOT NULL, CONSTRAINT "PK_472a349d435660dc793d23774b3" PRIMARY KEY ("player_id", "trainer_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_7726d880a7c9205bd446598d31" ON "players_trainers" ("player_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_60d9f98a7dbde64a93305e7626" ON "players_trainers" ("trainer_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "players_matches" ADD CONSTRAINT "FK_4e497e4d9bec9f5fd10270b1ea0" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "players_matches" ADD CONSTRAINT "FK_7018d38352a85427436ebd492de" FOREIGN KEY ("player_id") REFERENCES "players"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "players_trainers" ADD CONSTRAINT "FK_7726d880a7c9205bd446598d319" FOREIGN KEY ("player_id") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "players_trainers" ADD CONSTRAINT "FK_60d9f98a7dbde64a93305e76265" FOREIGN KEY ("trainer_id") REFERENCES "trainers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "players_trainers" DROP CONSTRAINT "FK_60d9f98a7dbde64a93305e76265"`,
    );
    await queryRunner.query(
      `ALTER TABLE "players_trainers" DROP CONSTRAINT "FK_7726d880a7c9205bd446598d319"`,
    );
    await queryRunner.query(
      `ALTER TABLE "players_matches" DROP CONSTRAINT "FK_7018d38352a85427436ebd492de"`,
    );
    await queryRunner.query(
      `ALTER TABLE "players_matches" DROP CONSTRAINT "FK_4e497e4d9bec9f5fd10270b1ea0"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_60d9f98a7dbde64a93305e7626"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_7726d880a7c9205bd446598d31"`,
    );
    await queryRunner.query(`DROP TABLE "players_trainers"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_7018d38352a85427436ebd492d"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_4e497e4d9bec9f5fd10270b1ea"`,
    );
    await queryRunner.query(`DROP TABLE "players_matches"`);
    await queryRunner.query(`DROP TABLE "trainers"`);
    await queryRunner.query(`DROP TABLE "players"`);
    await queryRunner.query(`DROP TABLE "matches"`);
  }
}
