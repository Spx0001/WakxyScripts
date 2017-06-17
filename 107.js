function ReadPacket()
{
	packet.Log("Ask for ping (/ping command)");
	
	packet.ReadByte("??");
	packet.ReadInt("??");
	packet.ReadLong("System.nanoTime()");
}

ReadPacket();