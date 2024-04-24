import { decode } from 'jsonwebtoken'

import { JwtPayload } from './JwtPayload'

import { createLogger } from '../utils/logger'

const logger = createLogger('utils')
/**
 * Parse a JWT token and return a user id
 * @param jwtToken JWT token to parse
 * @returns a user id from the JWT token
 */
export function parseUserId(jwtToken) {
  logger.info('jwtToken', jwtToken)
  const decodedJwt = decode(jwtToken) as JwtPayload
  return decodedJwt.sub
}
