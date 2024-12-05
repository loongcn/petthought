import React from 'react';

const FAQ: React.FC = () => {
    const faqs = [
        {
            question: "What Exactly is Pet Mind Reader and How Does AI Decode Pet Thoughts?",
            answer: "Pet Mind Reader is an innovative AI-powered platform that analyzes pet photos to create imaginative interpretations of what your pet might be thinking. Using advanced artificial intelligence and computer vision technology, our platform analyzes pet images to generate creative and insightful interpretations of what your pet might be thinking. Our AI is specifically trained on thousands of pet images, enabling it to recognize subtle emotional cues, facial expressions, and body language unique to different animal species."
        },
        {
            question: "How Does the Pet Mind Reader AI Technology Work?",
            answer: "Our Pet Mind Reader petmindreader.fun leverages cutting-edge AI technologies to transform pet image analysis into meaningful insights. The process involves several sophisticated steps: 1. Image Recognition, 2. Computer Vision Analysis, 3. Natural Language Generation. The entire analysis process takes just seconds, providing a unique window into your pet's potential psychological landscape."
        },
        {
            question: "Is My Pet's Image Completely Safe and Private?",
            answer: "Privacy and data security are our top priorities at Pet Mind Reader. We have implemented robust security measures to protect your pet's images and personal information. Your images are processed securely and immediately deleted after analysis."
        },
        {
            question: "What Types of Pets Can the AI Analyze?",
            answer: "Pet Mind Reader's AI is designed with versatility in mind, supporting a wide range of pets including dogs, cats, and small mammals. For best results, use clear, well-lit images with your pet's face clearly visible."
        }
    ];

    return (
        <section className="p-6 bg-white shadow-md rounded-lg mt-6 mb-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                Comprehensive Guide to Pet Mind Reader: AI-Powered Pet Thought Analysis
            </h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;