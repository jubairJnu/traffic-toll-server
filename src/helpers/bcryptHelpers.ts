import * as bcrypt from 'bcrypt';
import config from '../config';
const encryptPassword = async (plain: string): Promise<string> => {
  const saltRounds = Number(config.salt);
  const cleanPassword = String(plain).trim();
  return await bcrypt.hash(cleanPassword, saltRounds);
};

const decryptPassword = async (
  password: string,
  hashed: string,
): Promise<boolean> => {
  const cleanPassword = String(password).trim();
  const cleanHashed = String(hashed).trim();
  return await bcrypt.compare(cleanPassword, cleanHashed);
};

export const bcryptHeler = {
  encryptPassword,
  decryptPassword,
};
