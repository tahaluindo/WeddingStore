import DOMPurify from "isomorphic-dompurify"
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import FaqTabs from "./FaqTabs";
import * as Tabs from '@radix-ui/react-tabs';

const Faq = ({ data }) => {
    return (
        <section className="flex justify-center px-2 font-[poppins] text-black">
            <div className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-6xl bg-white">
                <div className="flex justify-center">
                    <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">FAQ</span>
                </div>
                <span className="divider"></span>
                <FaqTabs>
                    {data.map((item) => {
                        return (
                            <Tabs.Content className="TabsContent" value={item.kategori}>
                                {
                                    item.faqs.map((faq) => {
                                        return (
                                            <div key={`faq-${faq.id}`} className="space-y-4">
                                                <details className="group [&_summary::-webkit-details-marker]:hidden" open="">
                                                    <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
                                                        <h2 className="font-bold text-gray-900">
                                                            {faq.Pertanyaan}
                                                        </h2>
                                                        <svg
                                                            className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M19 9l-7 7-7-7"
                                                            />
                                                        </svg>
                                                    </summary>
                                                    <div className="px-4 mt-4 leading-relaxed text-gray-700">
                                                        <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
                                                            {DOMPurify.sanitize(faq.Jawaban)}
                                                        </ReactMarkdown>
                                                    </div>
                                                </details>
                                            </div>
                                        )
                                    })
                                }
                            </Tabs.Content>
                        )
                    })}
                </FaqTabs>
            </div>
        </section>
    )
}

export default Faq