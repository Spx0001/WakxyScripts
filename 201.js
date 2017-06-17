function ReadPacket()
{
	packet.Log("Chargement d'un élément interactif. 2 bytes inconnu, car allocate(12)");
	packet.ReadLong("ID élément interactif");
	packet.ReadShort("Type élément interactif");
}

ReadPacket();