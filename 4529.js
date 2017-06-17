function ReadPacket()
{
	packet.ReadLong("Target GUID");
	packet.ReadLong("ActionId, Critère Id ?");
	packet.Log(packet.Length());
}

ReadPacket();