import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

interface NavbarProps {
  className?: string,

}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links,)}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={classNames(cls.mainLink)}>Main page</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About us</AppLink>
      </div>

    </div>
  )
}
