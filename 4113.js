function ReadPacket()
{
	packet.ReadInt("From Position X");
	packet.ReadInt("From Position Y");
	packet.ReadShort("From Position Z");

	var StepSize = packet.ReadByte("Step count");

	for (var i = 0; i < StepSize; ++i)
	{
		var p = packet.ReadByte();
		var direction = (p >> 5) & 0x7;
		packet.Log("direction step [" + i + "] : " + direction);
	}
}

ReadPacket();