import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function ContactPage() {
  return (
    <>
        <h1>Contact Page</h1>

        <h1 className={'title'}>
          Ir a <Link href="/">Index</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/contact.js</code>
        </p>
    </>
  )
}

ContactPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}