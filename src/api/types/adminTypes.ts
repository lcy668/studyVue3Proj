export interface IGetAdminListPs {
  page: number
  limit: number
  name: string
  roles: string
  status: '' | 0 | 1
}

export interface IAdmin {
  id: number
  account: string
  head_pic: string
  pwd: string
  real_name: string
  roles: string
  last_ip: string
  last_time: number
  add_time: number
  login_count: number
  level: number
  status: number
  is_del: number
  _add_time: string
  _last_time: string
  statusLoading?: boolean
}
