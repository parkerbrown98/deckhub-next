import { FaNewspaper } from 'react-icons/fa';

const RecruitBox = () => {
    return (
        <div className="flex gap-x-4 items-center">
            <span className="inline-block p-4 bg-steam-200/40 rounded-full">
                <FaNewspaper className="text-steam-200 w-9 h-9" />
            </span>
            <div>
                <h4 className="font-semibold text-steam-200 text-xl">Don&apos;t miss out!</h4>
                <p className="text-gray-500 mt-1">Subscribe to our monthly newsletter for more Steam Deck guides, news, skins, and more!</p>
            </div>
        </div>
    )
}

export default RecruitBox;