import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HomeIcon, ArrowLeft } from 'lucide-react';
import Logo from '@/assets/logo.png';
import ErrorImage from '@/assets/error.svg';

export default async function NotFound() {
  return (
    <div className="min-h-screen flex flex-col p-6 md:p-10">
      <nav className="w-full max-w-7xl mx-auto">
        <Link href="/">
          <Button
            variant="ghost"
            className="gap-2 text-primary hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to homepage
          </Button>
        </Link>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto w-full gap-8">
        <div className="w-24 h-24 md:w-28 md:h-28">
          <Image
            src={Logo}
            alt="Logo"
            width={115}
            height={115}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-md md:max-w-lg">
            <Image
              src={ErrorImage}
              alt="404 Error Illustration"
              width={481}
              height={481}
              className="w-full h-auto"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            4<span className="text-primary">0</span>4 ERR
            <span className="text-primary">O</span>R
          </h1>

          <p className="text-lg text-muted-foreground text-center max-w-md">
            Page not found. Kindly visit the homepage
          </p>

          <Link href="/">
            <Button className="gap-2">
              <HomeIcon className="h-4 w-4" />
              Return Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
