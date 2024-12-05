import React, { useState, useEffect } from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaLink, FaReddit } from 'react-icons/fa';

interface ShareButtonsProps {
    imageUrl?: string;
    analysisResult?: string;
}

export default function ShareButtons({ imageUrl, analysisResult }: ShareButtonsProps) {
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    const shareTitle = analysisResult 
        ? `My Pet's Thought: ${analysisResult.slice(0, 50)}...`
        : 'Pet Mind Reader - Discover Your Pet\'s Thoughts';

    const shareText = analysisResult 
        ? `I discovered my pet might be thinking: "${analysisResult}" using Pet Mind Reader AI! 🐱`
        : 'I just discovered what my pet might be thinking using AI! Check out Pet Mind Reader.';

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(shareTitle)}&summary=${encodeURIComponent(shareText)}`,
        reddit: `https://www.reddit.com/submit?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(shareTitle)}`
    };

    const copyToClipboard = async () => {
        try {
            const shareContent = `${shareTitle}\n\n${shareText}\n\n${currentUrl}`;
            await navigator.clipboard.writeText(shareContent);
            alert('Share content copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy link', err);
        }
    };

    return (
        <section className="mt-8">
            <h2 className="text-xl font-semibold text-center mb-4">Share the Results</h2>
            <div className="flex flex-wrap justify-center gap-4">
                <a
                    href={shareLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-button hover:bg-blue-500"
                    aria-label="Share on Twitter"
                >
                    <FaTwitter size={24} />
                    <span>Twitter</span>
                </a>
                <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-button hover:bg-blue-600"
                    aria-label="Share on Facebook"
                >
                    <FaFacebook size={24} />
                    <span>Facebook</span>
                </a>
                <a
                    href={shareLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-button hover:bg-blue-700"
                    aria-label="Share on LinkedIn"
                >
                    <FaLinkedin size={24} />
                    <span>LinkedIn</span>
                </a>
                <a
                    href={shareLinks.reddit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-button hover:bg-orange-600"
                    aria-label="Share on Reddit"
                >
                    <FaReddit size={24} />
                    <span>Reddit</span>
                </a>
                <button
                    onClick={copyToClipboard}
                    className="share-button hover:bg-gray-500"
                    aria-label="Copy Link"
                >
                    <FaLink size={24} />
                    <span>Copy Link</span>
                </button>
            </div>
        </section>
    );
}
