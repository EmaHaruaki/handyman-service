import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Mail, MessageCircle, Clock, CheckCircle, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">何でも屋さん</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
              サービス内容
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              料金
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              お問い合わせ
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
              よくある質問
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact">
              <Button className="hidden md:flex">お問い合わせ</Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">メニュー</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  あなたの暮らしをサポート
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  家事代行から不用品回収、修理まで、日常のお困りごとを解決します。
                  何でも屋さんは、あなたの生活をより快適にするお手伝いをいたします。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#contact">
                    <Button size="lg" className="w-full sm:w-auto">
                      今すぐ相談する
                    </Button>
                  </Link>
                  <Link href="#services">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      サービスを見る
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/service_image2.jpg?height=500&width=800"
                  alt="何でも屋さんのスタッフが作業している様子"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">サービス内容</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">あらゆるお困りごとに対応します</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  何でも屋さんは、日常生活のさまざまな場面でお客様をサポートします。 お気軽にご相談ください。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>家事代行</CardTitle>
                  <CardDescription>掃除、洗濯、料理など、日常の家事をお手伝いします。</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>部屋の掃除・整理整頓</li>
                    <li>洗濯・アイロンがけ</li>
                    <li>料理の下準備・調理</li>
                    <li>食器洗い</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>不用品回収</CardTitle>
                  <CardDescription>不要になった家具や家電などを回収・処分します。</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>家具・家電の回収</li>
                    <li>季節品の整理</li>
                    <li>引越し前の片付け</li>
                    <li>遺品整理</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>修理・メンテナンス</CardTitle>
                  <CardDescription>家の小さな修理から設備のメンテナンスまで対応します。</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>電球・蛍光灯の交換</li>
                    <li>家具の組み立て</li>
                    <li>水漏れ修理</li>
                    <li>網戸・障子の張替え</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>買い物代行</CardTitle>
                  <CardDescription>食料品や日用品などのお買い物を代行します。</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>食料品の買い出し</li>
                    <li>日用品の購入</li>
                    <li>薬の受け取り</li>
                    <li>重い物の運搬</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>引っ越し手伝い</CardTitle>
                  <CardDescription>荷物の梱包から運搬、片付けまでサポートします。</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>荷物の梱包・開梱</li>
                    <li>家具の移動・運搬</li>
                    <li>不用品の処分</li>
                    <li>新居の片付け・掃除</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>その他</CardTitle>
                  <CardDescription>上記以外のお困りごとも、お気軽にご相談ください。</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>草むしり・庭の手入れ</li>
                    <li>ペットの世話</li>
                    <li>パソコン・スマホの設定</li>
                    <li>その他生活のお困りごと</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">料金</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">明確でわかりやすい料金体系</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  お客様のニーズに合わせた料金プランをご用意しています。 まずはお気軽にご相談ください。
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Tabs defaultValue="hourly" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="hourly">時間制</TabsTrigger>
                  <TabsTrigger value="package">パック料金</TabsTrigger>
                </TabsList>
                <TabsContent value="hourly" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>時間制料金</CardTitle>
                      <CardDescription>作業時間に応じた料金体系です。短時間のお手伝いに最適です。</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <div className="grid grid-cols-2 items-center gap-4 border-b pb-4">
                          <div className="font-medium">基本料金（1時間）</div>
                          <div className="text-right">3,000円（税込）</div>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4 border-b pb-4">
                          <div className="font-medium">追加料金（30分ごと）</div>
                          <div className="text-right">1,500円（税込）</div>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4 border-b pb-4">
                          <div className="font-medium">早朝・夜間割増（7:00以前、19:00以降）</div>
                          <div className="text-right">+30%</div>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4">
                          <div className="font-medium">出張費</div>
                          <div className="text-right">無料（市内）</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="package" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>パック料金</CardTitle>
                      <CardDescription>定額制のお得なパック料金です。定期的なご利用におすすめです。</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <div className="grid grid-cols-2 items-center gap-4 border-b pb-4">
                          <div className="font-medium">お掃除パック（2時間）</div>
                          <div className="text-right">5,500円（税込）</div>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4 border-b pb-4">
                          <div className="font-medium">引越し手伝いパック（4時間）</div>
                          <div className="text-right">12,000円（税込）</div>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4 border-b pb-4">
                          <div className="font-medium">不用品回収パック（軽トラック1台分）</div>
                          <div className="text-right">15,000円（税込）〜</div>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4">
                          <div className="font-medium">定期利用割引</div>
                          <div className="text-right">月2回以上で10%OFF</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  ※料金は目安です。作業内容や状況により変動する場合があります。
                  <br />
                  ※お見積りは無料です。まずはお気軽にご相談ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">お問い合わせ</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">お気軽にご連絡ください</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  電話、LINE、メールでのお問い合わせに対応しています。 お見積りは無料です。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card className="text-center transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">電話</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">01-2345-6789</p>
                  <p className="text-sm text-muted-foreground mt-2">受付時間: 9:00〜18:00（年中無休）</p>
                  <Button className="mt-4 w-full" asChild>
                    <a href="tel:01-2345-6789">今すぐ電話する</a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="text-center transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">LINE</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">LINE ID: nandemoya</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    24時間受付中
                    <br />
                    写真を送れるので状況が伝わりやすい
                  </p>
                  <Button className="mt-4 w-full" asChild>
                    <a href="https://line.me/R/ti/p/@nandemoya" target="_blank" rel="noopener noreferrer">
                      LINEで友達追加
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="text-center transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">メール</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">info@nandemoya.example.com</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    24時間受付中
                    <br />
                    詳細な内容を記載いただけます
                  </p>
                  <Button className="mt-4 w-full" asChild>
                    <a href="mailto:info@nandemoya.example.com">メールを送る</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">よくある質問</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">お客様からよくいただく質問</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  サービスについてのよくある質問をまとめました。 その他のご質問はお気軽にお問い合わせください。
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>対応エリアはどこですか？</AccordionTrigger>
                  <AccordionContent>
                    基本的には○○市内全域に対応しております。市外の場合は、距離に応じて出張費が発生する場合がございます。詳しくはお問い合わせください。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>予約はどのくらい前にすればいいですか？</AccordionTrigger>
                  <AccordionContent>
                    基本的には3日前までのご予約をお願いしております。ただし、緊急の場合は当日対応も可能な場合がありますので、まずはお電話またはLINEでご相談ください。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>キャンセル料はかかりますか？</AccordionTrigger>
                  <AccordionContent>
                    前日までのキャンセルは無料です。当日のキャンセルは、基本料金の50%をキャンセル料としていただいております。ただし、やむを得ない事情の場合はご相談ください。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>支払い方法は何がありますか？</AccordionTrigger>
                  <AccordionContent>
                    現金、クレジットカード、銀行振込、PayPayに対応しております。クレジットカードは、VISA、MasterCard、JCB、American
                    Expressがご利用いただけます。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>不在時でも作業は可能ですか？</AccordionTrigger>
                  <AccordionContent>
                    はい、可能です。鍵の受け渡し方法や作業内容について事前に詳しくお打ち合わせさせていただきます。セキュリティの観点から、初回は立ち会いをお願いしております。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>作業スタッフは男性ですか、女性ですか？</AccordionTrigger>
                  <AccordionContent>
                    男性スタッフ、女性スタッフ両方在籍しております。ご希望がございましたら、予約時にお申し付けください。ただし、状況によりご希望に添えない場合もございます。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  まずはお気軽にご相談ください
                </h2>
                <p className="md:text-xl">
                  何でも屋さんは、あなたの生活をより快適にするお手伝いをいたします。 お見積りは無料です。
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link href="#contact">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#services">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    サービスを見る <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">何でも屋さん</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">営業時間: 9:00〜18:00（年中無休）</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} 何でも屋さん All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

