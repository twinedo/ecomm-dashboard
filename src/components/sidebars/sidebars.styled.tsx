import styled from 'styled-components';
import Link from 'next/link';

export const SidebarContainer = styled.div`
  display: flex;
  background-color: #fafafa; /* equivalent to bg-neutral-50 */
`;

export const Sidebar = styled.div<{ collapsed: boolean }>`
  height: 100vh;
  background-color: white;
  padding-top: 24px;
  border-right: 1px solid #e5e7eb; /* equivalent to border-zinc-100 */
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  width: ${({ collapsed }) => (collapsed ? '55px' : '250px')};
`;

export const ToggleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 1.25rem; /* equivalent to text-xl */
`;

export const MenuContainer = styled.div<{ collapsed: boolean }>`
  padding-top: 1.5rem; /* equivalent to pt-6 */
  background-color: white;
  border-right: 1px solid #e5e7eb; /* equivalent to border-zinc-100 */
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 3.125rem; /* equivalent to gap-[50px] */
  overflow: hidden;
  width: ${({ collapsed }) => (collapsed ? '55px' : '250px')};
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* equivalent to gap-2 */
`;

export const LinkContainer = styled(Link)<{ isActive: boolean }>`
  display: inline-flex;
  justify-content: start;
  align-items: center;
  gap: 1rem; /* equivalent to gap-4 */
  width: 229px;
  height: 3rem; /* equivalent to h-12 */
  text-decoration: none;
`;

export const Indicator = styled.div<{ isActive: boolean }>`
  width: 0.375rem; /* equivalent to w-1.5 */
  height: 2.25rem; /* equivalent to h-9 */
  background-color: ${({ isActive }) => (isActive ? '#3b82f6' : 'white')}; /* bg-blue-500 or bg-white */
`;

export const MenuText = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem; /* equivalent to gap-2 */
  color: ${({ isActive }) => (isActive ? '#3b82f6' : '#9ca3af')}; /* text-blue-500 or text-neutral-400 */
  font-size: 1rem; /* equivalent to text-base */
  font-weight: 500; /* equivalent to font-medium */
  line-height: 1.25rem; /* equivalent to leading-tight */
  text-align: center;
`;

export const ContentContainer = styled.div<{ collapsed: boolean }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: ${({ collapsed }) => (collapsed ? '100%' : 'calc(100% - 250px)')};
  height: 100vh;
  background-color: #fafafa; /* equivalent to bg-neutral-50 */
  /* padding: 20px; equivalent to p-[20px] */
`;

export const ContainerAuthLeft = styled.div`
  display: flex;
  background-color: #ACD1AF; /* equivalent to bg-neutral-50 */
`;

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
`;

