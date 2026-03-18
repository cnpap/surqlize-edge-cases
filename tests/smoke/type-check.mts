import { orm, t, table } from "surqlize";
import { Surreal } from "surrealdb";

const user = table("user", {
	name: t.string(),
	age: t.number(),
});

const db = orm(new Surreal(), user);
const query = db.select("user").where((f) => f.age.gte(18)).return((f) => ({
	name: f.name,
}));

type QueryResult = t.infer<typeof query>;
type UserRecord = (typeof user)["type"];

const _result = null as QueryResult | null;
const _user = null as UserRecord | null;

void _result;
void _user;
