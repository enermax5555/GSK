import React from 'react';
import ImageHoverLink from '../components/ImageHoverLink';

const Gallery: React.FC = () => {
    const projects = [
        {
            imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
            title: 'E-commerce Platform',
            link: '#'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
            title: 'Dashboard Analytics',
            link: '#'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
            title: 'Mobile App Design',
            link: '#'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
            title: 'Corporate Website',
            link: '#'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=400&h=300&fit=crop',
            title: 'SaaS Platform',
            link: '#'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop',
            title: 'Portfolio Website',
            link: '#'
        }
    ];

    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Our Work
                    </h1>
                    <p className="text-xl text-gray-600">
                        Take a look at some of our recent projects and achievements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ImageHoverLink
                            key={index}
                            imageUrl={project.imageUrl}
                            alt={project.title}
                            link={project.link}
                            label={project.title}
                        />
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                            <div className="text-gray-600">Projects Completed</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                            <div className="text-gray-600">Happy Clients</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                            <div className="text-gray-600">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                            <div className="text-gray-600">Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;