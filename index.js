import { Bucket, HashMap } from "./bucketHashMap.js";

function test() {
	let prova0 = new HashMap();
	//prova0.hash("Luca");
	prova0.set("Luca", "Agente 00");
	console.log();
	//prova0.set("Mario Rossi", "Agente 000");
	prova0.set("Pago Col Pos", "Agente 013");
	prova0.set("Cioppa Tutto", "Agente 006");
	//prova0.set("Riccardo Burioni", "Agente 003");
	//prova0.set("John", "Agente 011");
	//prova0.set("Player", "Agente 001");
	//prova0.set("Play@e#r", "Agente 008");
	console.log();

	//console.log(prova0.get("Luca"));
	console.log();
	console.log(prova0.has("Luca"));
	console.log();
	//console.log(prova0.has("Lucas"));
	//console.log();

	prova0.set("Marco", "Agente 0010");
	console.log();
	// Marco1 === Luca === 7
	prova0.set("Marco1", "Agente 0070");
	console.log();
	console.log(prova0.get("Pago Col Pos"));
	console.log(prova0.has("Pago Col Pos"));
	console.log(prova0.remove("Marco1"));
	console.log();
	/*console.log(prova0.get("Marco"));
	console.log();
	console.log(prova0.has("Marco"));
	console.log();*/
	prova0.set("Luca", "Agente 007");
	console.log();

	console.log(prova0.length());
	console.log();
	console.log(prova0.keys());
	console.log();
	console.log(prova0.values());
	console.log();
	console.log(prova0.entries());
	console.log();

	/*prova0.clear();
	console.log();
	console.log(prova0.length());
	console.log();
	console.log(prova0.keys());
	console.log();
	console.log(prova0.values());
	console.log();
	console.log(prova0.entries());
	console.log();*/

	console.log("Total length:", prova0.buckets.length);
}

test();
